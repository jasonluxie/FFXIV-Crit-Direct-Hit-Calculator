function Form(props) {
    console.log(props);
    let userForm;
    if (props.type === "level") {
        userForm = (
            <section>
                <label>Level </label>
                <input type="number" id="lvl" min="1" max="90" value="90" />
            </section>
        );
    } else if (props.type === "crit") {
        userForm = (
            <section class="criticalHit">
                <h2>Critical Hit</h2>
                <label>Critical Hit </label>
                <input type="number" id="crit" min="1" />
                <button id="critButton">Critical Hit</button>
                <p class="criticalHit-result">
                    Critcal Hit %:
                    <span class="crit-result_percent"></span> Critical Hit
                    Strength:
                    <span class="crit-result_strength"></span>
                </p>
            </section>
        );
    } else if (props.type === "directHit") {
        userForm = (
            <section class="directHit">
                <h2>Direct Hit</h2>
                <label>Direct Hit</label>
                <input type="number" id="dh" min="1" />
                <p class="directHit-result"></p>
            </section>
        );
    }
    return userForm;
}

export default Form;
