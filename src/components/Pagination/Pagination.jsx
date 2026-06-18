import styles from "./Pagination.module.css";

export const Pagination = ({
  currentPage,
  nextPage,
  prevPage,
  isFirstPage,
  isLastPage,
}) => {
  // Si ya estamos en la página 1 y no hay siguiente, ni mostramos los controles.
  if (isFirstPage && isLastPage) return null;

  return (
    <nav className={styles.pagination} aria-label="Paginación de productos">
      <button
        className={styles.navButton}
        onClick={prevPage}
        disabled={isFirstPage}
      >
        ◀ Anterior
      </button>

      <span className={styles.currentPageLabel}>Página {currentPage}</span>

      <button
        className={styles.navButton}
        onClick={nextPage}
        disabled={isLastPage}
      >
        Siguiente ▶
      </button>
    </nav>
  );
};
