import React from "react";
type Props ={
  size: '50px' | '30px' | '20px' | '70px',
  children: string | React.ReactNode,
  onClick?: () => void,
}
const MyButton = ({size = '50px', children, onClick}: Props) => {

  return(
    <button
     style={{
      borderRadius: '5px',
       backgroundColor: '#5353f7',
       outline: 'noen',
       border: 'none',
       paddingRight: size,
       paddingLeft: size,
       color: 'white',
       height: '40px',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
    }}
    onClick={onClick}
    ><p className="h1-17-mont">{children}</p></button>
  )
};

export default MyButton;
