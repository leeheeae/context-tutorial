import ColorContext from "../contexts/color";

const ColorBox = () => {
    return (
        <ColorContext.Consumer>
            {(value) => (
                <div
                    style={{
                        width: "64px",
                        heigth: "64px",
                        background: value.color,
                    }}
                />
            )}
        </ColorContext.Consumer>
    );
};

export default ColorBox;
