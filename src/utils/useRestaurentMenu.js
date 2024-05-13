import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useRestaturentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(MENU_API);
    const json = await data.json();
    setResInfo(json.data);
  };
  //we should always know what to return in the custom hoooks
  return resInfo;
};

export default useRestaturentMenu;
