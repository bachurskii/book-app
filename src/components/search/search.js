import { DivComponent } from "../../common/div-component";
import "./search.css";
export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search() {
    const value = this.el.querySelector("input").value;
    this.state.searchQuerry = value;
  }

  render() {
    this.el.classList.add("search");
    this.el.innerHTML = `
   <div class="search__wrapper">
   <input type="text" placeholder="Find a book or author..." class="search__input" value="${
     this.state.searchQuerry ? this.state.searchQuerry : ""
   }" />
   <img src="/src/static/search.svg" alt="icon search"/>
   </div>
   <button  aria-label="find">
   <img src="/src/static/search-white.svg" alt="icon search"/>
   </button>
    `;
    this.el
      .querySelector("button")
      .addEventListener("click", this.search.bind(this));
    this.el.querySelector("input").addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        this.search();
      }
    });
    return this.el;
  }
}
