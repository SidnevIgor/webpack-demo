class Main {
  render() {
    const btn = document.createElement("button");
    btn.innerHTML = "Add element";
    btn.onclick = this.addTitle;
    document.querySelector("body").appendChild(btn);
  }
  addTitle() {
    const heading = document.createElement("h6");
    heading.innerHTML = "Added heading";
    document.querySelector("body").appendChild(heading);
  }
}

export default Main;
