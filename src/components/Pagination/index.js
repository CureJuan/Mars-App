import React from "react";
import { LIMITS } from "../SelectsAnidados";
import styles from "./Pagination.module.css";
import classnames from "classnames";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Pagination = ({ page, setPage, totalPages, limit, setLimit }) => {
  const increasePage = () => {
    if (page + 1 > totalPages) {
      return setPage(totalPages);
    }
    return setPage(page + 1);
  };

  const decreasePage = () => {
    if (page - 1 === 0) {
      return setPage(1);
    }
    setPage(page - 1);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles["input-container"]}>
        <div
          onClick={decreasePage}
          className={classnames(styles.inline, styles["arrow-left"])}
        >
          {" "}
          <AiOutlineArrowLeft />
          <i className="fas fa-angle-left" />
        </div>
        <div className={styles.numbers}>
          {[...Array(totalPages)].map((item, index) => (
            <span
              key={index + 1}
              className={classnames(styles.number, {
                active: index + 1 === page,
              })}
            >
              {page}
            </span>
          ))}
        </div>
        <div
          className={classnames(styles.inline, styles["arrow-right"])}
          onClick={increasePage}
        >
          {" "}
          <AiOutlineArrowRight />
          <i className="fas fa-angle-right" />
        </div>
        <div className={styles.inline}></div>
        <div className={styles.inline}>
          <select
            className={classnames(
              "browser-default custom-select",
              styles.select
            )}
            onChange={(ev) => setLimit(ev.target.value)}
          >
            {LIMITS.map((_limit) => (
              <option value={_limit} selected={_limit === limit}>
                {_limit}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inline}></div>
      </div>
    </div>
  );
};

export default Pagination;
