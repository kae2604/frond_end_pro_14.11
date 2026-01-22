export const createModalsAddContact = function(id){
    const wrapper = document.createElement('div');
    wrapper.id = id;
    wrapper.classList.add('modal', 'fade');
    wrapper.setAttribute('tabindex', '-1');
    wrapper.setAttribute('aria-labelledby', 'staticBackdropLabel');
    wrapper.innerHTML = `
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabelAddContact">Add Contact</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="add-contact-form">
                                    <div class="mb-3">
                                        <label for="fn" class="form-label">Full name</label>
                                        <input name="fullName" type="text" class="form-control" id="fn">
                                    </div>
                                    <div class="mb-3">
                                        <label for="pn" class="form-label">Phone number</label>
                                        <input name="phone" type="tel" class="form-control" id="pn">
                                    </div>
                                    <div class="mb-3">
                                        <label for="ad" class="form-label">Address</label>
                                        <textarea name="address" class="form-control" id="ad" cols="20"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                <button form="add-contact-form" type="submit" class="btn btn-success">Save</button>
                            </div>
                        </div>
                    </div>`
    document.body.append(wrapper);
    return new bootstrap.Modal(wrapper, {
            keyboard: true,
            backdrop: true
    });
};

export const createModalsRemoveContact = function(id){
    const wrapper = document.createElement('div');
    wrapper.id = id;
    wrapper.classList.add('modal', 'fade');
    wrapper.setAttribute('tabindex', '-1');
    wrapper.setAttribute('aria-labelledby', 'staticBackdropLabel');
    wrapper.setAttribute('aria-hidden', 'true');
    wrapper.setAttribute('aria-labelledby', 'staticBackdropLabel');
    wrapper.setAttribute('data-bs-backdrop', 'static');
    wrapper.setAttribute('data-bs-keyboard', 'false');
    wrapper.innerHTML = `
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabelDeleteContact">???</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
              
                            <div class="modal-footer-confirm-remove">
                                <button type="submit" class="btn btn-primary remove-confirm" data-Remove-Confirm>Remove</button>
                                <button type="button" class="btn btn-secondary remove-cancel" data-Remove-Cancel data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>`
    document.body.append(wrapper);
    return new bootstrap.Modal(wrapper, {
        keyboard: true,
        backdrop: true
    });
};

export const createToastContact = function(id, dataAttribute, status){
    const wrapper = document.createElement('div');
    wrapper.classList.add('toast-container', 'position-fixed', 'bottom-0', 'end-0', 'p-3');
    wrapper.innerHTML = `
                      <div id= "${id}" class="toast text-bg-primary" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="toast-header">
                                <strong class="me-auto"> Contact ${status}!</strong>
                                <small>Just now!</small>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                              <div class="toast-body" ${dataAttribute}>
                                   ...
                            </div>
                       </div>`

    document.body.append(wrapper);
    const toastElement = wrapper.querySelector(`#${id}`);
    return new bootstrap.Toast(toastElement);
};

