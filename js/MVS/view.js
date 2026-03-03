class View{
    containerForTable = document.querySelector('[data-container-table]');
    allTable = document.querySelector('[data-all-table]');
    tableBody = document.querySelector('[data-table-body]');
    modalBtnCancel = document.querySelector('[data-modal-btn-cancel]');








    renderTableRow(user){
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
        <th scope="row" class="text-center">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.company.name}</td>
            <td class="text-center">
                <button type="button" class="btn btn-primary my-btn" data-btn-edit>
                    <i class="bi bi-pen"></i>
                </button>
            </td>
            <td class="text-center">
                <button type="button" class="btn btn-danger my-btn">
                    <i class="bi bi-trash3"></i> 
                </button>
            </td>`
        this.tableBody.append(tableRow);
    };

    renderTable(users){
        users.forEach(user => {
            this.renderTableRow(user)
        })
    };

    openModal(action){
        const openModal = document.createElement('div');
        openModal.dataset.modal = '';
        openModal.classList.add(
            'position-fixed',
            'top-50',
            'start-50',
            'translate-middle'
        );
        openModal.innerHTML = `
        <div class="mx-auto my-width-500 mb-3 border p-4 bg-black rounded">
            <form id="myForm " class="d-flex justify-content-center flex-column gap-3">
                <label for="edit-name" class="text-light"> ${action} name </label>
                <input type="text" name="name" id="edit-name" class="form-control form-control-lg">
    
                <label for="edit-email" class="text-light"> ${action} email </label>
                <input type="email" name="email" id="edit-email" class="form-control form-control-lg">
    
                <label for="edit-phone" class="text-light"> ${action} phone </label>
                <input type="text" name="phone" id="edit-phone" class="form-control form-control-lg">
    
                <label for="edit-company" class="text-light"> ${action} company </label>
                <input type="text" name="company" id="edit-company" class="form-control form-control-lg mb-3">
    
                <div class="d-flex justify-content-between ">
                    <button type="button" class="btn btn-secondary my-btn" data-modal-btn-cancel >Cancel</button>
                    <button type="submit" class="btn btn-success my-btn">Submit</button>
                </div>
            </form>
        </div>`
        this.containerForTable.append(openModal)
    }

    closeModal(){
        const modal = document.querySelector('[data-modal]');
        modal.remove();
    }



}
export default View;