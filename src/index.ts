const init = () => {
  console.log("hi jon");
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href$="[nf]"]');

  links.forEach((link) => {
    link.href = link.href.replace("[nf]", "");
    link.setAttribute("rel", "nofollow");
  });
};

document.addEventListener("DOMContentLoaded", init);
