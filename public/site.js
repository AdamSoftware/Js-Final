/// Add the sticky class to the nav when you scroll
var navbar = document.getElementById("Nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//----//
// this is all the db stuff and things //
//---//

async () => {
  const button = document.querySelector("button");
  const input = document.querySelector("input");
  const p = document.querySelector("p");

  const getMenuItems = async () => {
    const Res = await fetch("/api/Menu");
    const FoodMenu = await Res.json();

    return FoodMenu;
  };

  const getEventItems = async () => {
    const response = await fetch("/api/Events");
    const EventMenu = await response.json();

    return EventMenu;
  };

  const displayMenuItems = (FoodMenu) => {
    ul.innerHTML = "";
    FoodMenu.forEach(({ Name, Description, Price, imageURL }) => {
      const li = document.createElement("li");
      p.appendChild(li);

      const span = document.createElement("span");
      // Concatenate values using template literals
      span.textContent = Name;
      span.textContent = Description;
      span.textContent = Price;
      span.textContent = imageURL;

      li.appendChild(span);
    });
  };
  const displayEventItems = (EventMenu) => {
    ul.innerHTML = "";
    EventMenu.forEach(({ Name, Location, Date, Hours, imageURL }) => {
      const li = document.createElement("li");
      ul.appendChild(li);

      const span = document.createElement("span");
      (span.textContent = Name), Location, Date, Hours, imageURL;

      li.appendChild(span);
    });
  };
  displayEventItems(await getEventItems());
  displayMenuItems(await getMenuItems());
};

// CSS JS for webpage nev
window.onscroll = function () {
  myFunction();
};
