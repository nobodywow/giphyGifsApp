export const clearAndExpandContainer = (container, ...children) => {
    container.innerHTML = '';
    children.forEach((item) => {
        container.appendChild(item);
    });
};