export const setContainerChildren = (container, ...children) => {
    container.innerHTML = '';
    children.forEach((item) => {
        container.appendChild(item);
    });
};