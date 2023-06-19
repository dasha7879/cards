import { RootState } from "../../app/store";

const packSelector = (state:RootState)=> state.pack.packs

export {packSelector}