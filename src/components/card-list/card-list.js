import { DivComponent } from "../../common/div-component";
import "./card-list.css";
export class CardList extends DivComponent {
  constructor(appState, parrentState) {
    super();
    this.appState = appState;
    this.parrentState = parrentState;
  }

  render() {
    if (this.parrentState.loading) {
      this.el.innerHTML = `<div class="card_list_loader"><img src="/static/Animation - 1702920532307.gif" alt="Loading..."/></div>`;
      return this.el;
    }
    this.el.classList.add("card_list");
    this.el.innerHTML = `<h1>Find books - ${this.parrentState.numFound}</h1
    `;

    return this.el;
  }
}
