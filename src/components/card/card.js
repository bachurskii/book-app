import { DivComponent } from "../../common/div-component";
import "./card.css";
export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  #addToFavorites() {
    this.appState.favorites.push(this.cardState);
  }
  #deleteFromFavorites() {
    this.appState.favorites = this.appState.favorites.filter(
      (b) => b.key !== this.cardState.key
    );
  }

  render() {
    this.el.classList.add("card");
    const existFavorites = this.appState.favorites.some(
      (b) => b.key == this.cardState.key
    );
    this.el.innerHTML = `
    <div class="card_img"> 
        <img src="https://covers.openlibrary.org/b/olid/${
          this.cardState.cover_edition_key
        }-M.jpg" alt="cover"/>
    </div>
    <div class="card_info">
        <div class="card_tag">
            ${
              this.cardState.subject
                ? this.cardState.subject[0]
                : "Not specified"
            }
        </div>
        <div class="card_name">
            ${this.cardState.title}
        </div>
        <div class="card_author">
            ${
              this.cardState.author_name
                ? this.cardState.author_name[0]
                : "Not specified"
            } 
        </div>
        <div class="card_footer">
            <button class="button__add ${
              existFavorites ? "button__active" : ""
            }">
                ${
                  existFavorites
                    ? '<img src="/static/favorites.svg" />'
                    : '<img src="/static/favorite-white.svg"/>'
                } 
            </button>
        </div>
    </div>
`;
    if (existFavorites) {
      this.el
        .querySelector("button")
        .addEventListener("click", this.#deleteFromFavorites.bind(this));
    } else {
      this.el
        .querySelector("button")
        .addEventListener("click", this.#addToFavorites.bind(this));
    }
    return this.el;
  }
}
