import '../ui/scss/styles.scss'

function InfoBlock({ head, p, InfoImg, btn, URL }) {
    return (
        <div className="padding-100px">
            <div className="container">
                <div className="InfoBlock">
                    <div className="InfoBlock-img">
                        <img src={InfoImg} />
                    </div>
                    <div className="InfoBlock-text">
                        <h1>{head}</h1>
                        <p dangerouslySetInnerHTML={{__html: p}} />
                        {btn === "true" && (
                            <div className="InfoBlock-text-btn"><a href={URL}>ПОДРОБНЕЕ</a></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoBlockReverse({ head, p, InfoImg, btn, URL }) {
    return (
        <div className="padding-100px">
            <div className="container">
                <div
                    className="InfoBlock"
                    style={{ flexDirection: "row-reverse" }}
                >
                    <div className="InfoBlock-img">
                        <img src={InfoImg} />
                    </div>
                    <div className="InfoBlock-text">
                        <h1 >{head}</h1>
                        <p dangerouslySetInnerHTML={{__html: p}} />
                        {btn === "true" && (
                            <div className="InfoBlock-text-btn" style={{ textAlign: "right" }}><a href={URL}>ПОДРОБНЕЕ</a></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
function Info() {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#555", marginTop: "10px" }}>
          Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.
          Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae
          ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem
          velit accumsan velit.
        </p>
        <img src={img01} alt="Info" style={{ width: "100%", maxWidth: "300px", marginTop: "15px" }} />
        <a href="/url" style={{ marginTop: "20px", color: "blue", textDecoration: "underline", cursor: "pointer" }}>
          Read more
        </a>
      </div>
    );
  }
  

export {
    InfoBlock,
    InfoBlockReverse
};