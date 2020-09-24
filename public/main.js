console.log("我是main.js 2");

let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};

getJson.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};

getXml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/3.html");
  request.onload = () => {
    //创建div
    const div = document.createElement("div");
    //填写div内容
    div.innerHTML = request.response;
    //将div插入body里面
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};

getJs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/2.js");
  request.onload = () => {
    //创建script标签
    const script = document.createElement("script");
    //填写script内容
    script.innerHTML = request.response;
    //将script标签插入身体里
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};

getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/style.css"); //readyState =1
  request.onreadystatechange = () => {
    //下载完成，但不知道是成功2XX，还是失败4XX 5XX
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        const style = document.createElement("style");
        //填写style内容
        style.innerHTML = request.response;
        //将style插入到头部
        document.head.appendChild(style);
      } else {
        alert("加载 css 失败");
      }
    }
  };

  request.send(); // readyState =2
};
