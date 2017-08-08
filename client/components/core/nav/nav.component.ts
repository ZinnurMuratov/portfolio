import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <nav class="navigation">
      <ul class="flat-list right navigation-links">
        <li class="nav-link">
          <a>Home</a>
        </li>
        <li class="nav-link">
          <a>Portfolio</a>
        </li>
      </ul>
    </nav>
  `
})
export class NavComponent extends Vue {
  // 
}
