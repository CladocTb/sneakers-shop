import styles from "./Card.module.scss";
export function Card(props) {
  const onClickButton = () => {
    alert(props.title);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heard-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <p>Цена</p>
          <b>{props.price}</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
