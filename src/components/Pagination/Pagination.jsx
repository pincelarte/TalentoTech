import styles from "./pagination.module.css";

export const Pagination = ({
  currentPage,
  totalPages,
  goToPage,
  nextPage,
  prevPage,
  isFirstPage,
  isLastPage,
}) => {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={styles.pagination} aria-label="Paginación de productos">
      <button
        className={styles.navButton}
        onClick={prevPage}
        disabled={isFirstPage}
      >
        ◀ Anterior
      </button>

      <ul className={styles.pageList}>
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={`${styles.pageButton} ${
                page === currentPage ? styles.active : ""
              }`}
              onClick={() => goToPage(page)}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

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
