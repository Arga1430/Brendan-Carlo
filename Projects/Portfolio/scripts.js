const projects = [
  {
    id: 1,
    title: "Hot off the press",
    category: "Design",
    img: "./Productpage.jpg",
    desc: `The final interation of "Hot of the press" the front page to my E-commerce site DireCustomApparel.com`
  },
  {
    id: 2,
    title: "Custom Order Form",
    category: "Design",
    img: "./submit-form.jpg",
    desc: `A custom order submition form.`
  },
  {
    id:3,
    title: "Comic Noir",
    category: "Design",
    img:"",
    desc:`A comic book inspired designed created by tapping into the turn.js JQUERY plugin`
  }

];

window.addEventListener("DOMContentLoaded", function () {
    displayProjectBlock(projects);
    displayMenuButtons();
});


function displayProjectBlock(projectItems){
  let displayProjects = projects.map(function (item) {
    // console.log(item);

    return `
    <div class="project-folder">	
    <div class="project-container">
      <div class="container" id="card-one">
        <div class="card">
          <div class="imgBx">
          <img src="./images/Productpage.jpg">
          </div>
          <div class="contentBx">
          <h2>Product Page</h2>
          <div class="skill-set">
            <h3>Skill Set :</h3>
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
          </div>
          <div class="project-info">
            <p>Live product page made for DireCustomApparel.com. A custom apparel printing and design studio operated and run by yours truly as well.</p>
          </div>
          </div>
        </div>
        </div>
    </div>
    `;

    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title}/>
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;                                              
  });

  displayProjectBlock = displayProjectBlock.join("");
   console.log(displayProjectBlock);

  sectionCenter.innerHTML = displayProjectBlock;

};