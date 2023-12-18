import { DivComponent } from "../../common/div-component";
import "./card.css";
export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.parrentState = cardState;
  }

  render() {
    this.el.classList.add("card");
    this.el.innerHTML = `<div class="card_img"> 
    <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="cover"/>
    </div>
    <div class="card_info">
    <div class="card_teg"></div>
    </div>
    `;

    return this.el;
  }
}
