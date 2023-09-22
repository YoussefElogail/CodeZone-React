import { atom } from "recoil";

const titleState = atom({
  key: 'titleState', // unique ID (with respect to other atoms/selectors)
  default: [
    { id: 0, title: "title 0" },
    { id: 1, title: "title 1" },
    { id: 2, title: "title 2" },
  ], // default value (aka initial value)
});

export default titleState