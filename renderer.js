window.onload = () => {
  let btn = document.getElementById("tan");
  btn.onclick = async () => {
    const data = await window.version.ping();
    alert(data);
  };
};
