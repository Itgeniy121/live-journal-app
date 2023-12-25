"use client";
import MyButton from "@/components/UI/Button/MyButton";
import st from "./styles/IndexMain.module.css";
import { toast } from "react-toastify";
import { AppSelector } from "./hooks/useSelector";
import { createPosts } from "@/API/userPosts";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToPostForm } from "@/store/slices/PostForm.slice";
import useUserInfo from "@/API/userInfo";
import { addNewPosts } from "@/store/slices/ReloadPosts";
import { storage } from "@/firebase";
import {ref, uploadBytesResumable} from "firebase/storage"
import Image from "next/image";
import clip from "@/static/clip.png"
const Index = () => {
  const { post } = AppSelector(state => state.postForm);
  const[url, setUrl] = useState<any>(null)
  const dispatch = useDispatch();
  const filePicker = useRef<any>(null);
  const [selectedFile, setSelectedFile] = useState<any>('None');
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { userInfo } = useUserInfo();
  const data = {
    title: title,
    desc: description,
    name: userInfo?.name,
    date: new Date().toLocaleDateString(),
    img: url,
  };
  useEffect(() => {
    dispatch(addToPostForm(data));
  }, [title, description, selectedFile]);

  const createPost = async () => {
    if(post[0] !== null && selectedFile){
      const r = await ref(storage, `imgs/${selectedFile?.name}`)
      const upload = uploadBytesResumable(r, selectedFile)
      createPosts(post[0], url);
      dispatch(addNewPosts(data));
      setTitle("");
      setDescription("");
    } else {
      toast.error("Для начала войдите в аккаунт", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTitle("");
      setDescription("");
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      files.forEach(file =>{
        if(!file.type.match('image')){
          return
        }
        const reader = new FileReader()
        reader.onload = ev => {
          setUrl(ev.target?.result)
        } 
        reader.readAsDataURL(file)
      })
      setSelectedFile(e.target.files[0])
    } else return
  };

  
  return (
    <div className={st.createField}>
      <h1 className='h1-40-jose'>Новый пост</h1>
      <div className={st.fields}>
        <input
          type='text'
          className={st.title}
          placeholder='Что у вас нового?'
          value={title}
          onChange={e => setTitle(e.target.value)}          
        />
        <textarea
          name='postForm'
          id='post'
          className={st.area}
          placeholder='Расскажите подробнее'
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className={st.forImg}>
      {(selectedFile && url !== null) && (<img src={url} alt="img" className={st.img}/>)}
      </div>
      <div className={st.btns}>
        <MyButton children='Опубликовать' size='70px' onClick={createPost} />
        <Image className={st.clip} onClick={() => filePicker.current.click()} src={clip} alt="clip"></Image>
        <input
          type='file'
          className={st.hidden}
          onChange={handleSelect}
          accept='image/*,.png,.jpg,.gif,.web'
          ref={filePicker}
        />
      </div>
    </div>
  );
};

export default Index;
