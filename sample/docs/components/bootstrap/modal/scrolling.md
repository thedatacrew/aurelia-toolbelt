```html
<abt-button id="showModalLarge">
    Launch Scrolling Modal
</abt-button>

<!-- Modal -->
<abt-modal open-by="showModalLarge" dismissible="false">
  <abt-modal-header>
    <abt-modal-title class="modal-title-aurelia">
      <h5>Aurelia Toolbelt Dialog</h5>
    </abt-modal-title>
  </abt-modal-header>
  <abt-modal-body>
    <div>
      ...
    </div>
  </abt-modal-body>
  <abt-modal-footer>
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </abt-modal-footer>
</abt-modal>
```
