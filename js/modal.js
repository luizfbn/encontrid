export class modal {
    constructor() {
        this.modalHtml = document.createElement('div');
        this.modalHtml.classList = 'modal';
        this.modalHtml.innerHTML = `
        <div class="modal-container">
            <div class="modal-header">
                <h1 class="font-1-xxl color-10">Oops!</h1>
                <button type="button" class="close">&times;</button>
            </div>
            <div class="modal-content font-2-m color-7">
                <div>
                    <p>Este é um site <span class="bold">fictício</span>, portanto não há o envio e o uso dos dados preenchidos no formulário.</p>
                    <p>É apenas como <span class="bold">simulação</span>.</p>
                </div>
                <img src="./assets/img/modal.svg" alt="Formulário vazio"></img>
            </div>
        </div>`;
        this.handleModal();
    }

    handleModal() {
        document.body.appendChild(this.modalHtml);
        const closeButton = this.modalHtml.getElementsByClassName('close')[0];
        closeButton.addEventListener('click', () => this.hideModal());
        window.onclick = (event) => {
            if (event.target === this.modalHtml) {
                this.hideModal();
            }
        }
    }
    
    hideModal() {
        this.modalHtml.style.display = 'none';
    }
    
    showModal() {
        this.modalHtml.style.display = 'flex';
    }
}
