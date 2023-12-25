import { RootState } from "@/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const AppSelector: TypedUseSelectorHook<RootState> = useSelector;
