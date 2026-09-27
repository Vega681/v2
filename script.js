/* =====================================
   MICROSCOPE INFORMATION
===================================== */

const microscopeParts = {

    eyepiece: {
        name: "Eyepiece",
        icon: "🔭",

        description:
            "The eyepiece is the part you look through when using a microscope.",

        function:
            "It magnifies the image produced by the objective lens so that the specimen can be viewed more clearly.",

        viewBox: "45 5 75 70"
    },


    objectives: {
        name: "Objective Lenses",
        icon: "🔬",

        description:
            "The objective lenses are located close to the specimen.",

        function:
            "They provide the main magnification of the specimen. Different objective lenses provide different magnification levels.",

        viewBox: "45 40 80 70"
    },


    nosepiece: {
        name: "Revolving Nosepiece",
        icon: "⚙️",

        description:
            "The revolving nosepiece holds the objective lenses.",

        function:
            "It allows the user to rotate between different objective lenses.",

        viewBox: "40 35 90 65"
    },


    stage: {
        name: "Stage",
        icon: "⬛",

        description:
            "The stage is the flat platform where the microscope slide is placed.",

        function:
            "It supports the specimen slide while the specimen is being observed.",

        viewBox: "25 75 115 65"
    },


    clips: {
        name: "Stage Clips",
        icon: "📎",

        description:
            "Stage clips are small pieces located on top of the stage.",

        function:
            "They hold the microscope slide securely in position.",

        viewBox: "35 75 90 40"
    },


    diaphragm: {
        name: "Diaphragm",
        icon: "⭕",

        description:
            "The diaphragm is located underneath the stage.",

        function:
            "It controls the amount of light passing through the specimen.",

        viewBox: "35 105 90 55"
    },


    coarse: {
        name: "Coarse Adjustment Knob",
        icon: "⚙️",

        description:
            "The coarse adjustment knob is the larger focusing knob.",

        function:
            "It moves the microscope's focusing mechanism by a larger amount to bring the specimen into general focus.",

        viewBox: "85 55 70 80"
    },


    fine: {
        name: "Fine Adjustment Knob",
        icon: "⚙️",

        description:
            "The fine adjustment knob is the smaller focusing knob.",

        function:
            "It makes small focusing adjustments to make the specimen image clearer.",

        viewBox: "95 90 55 70"
    },


    arm: {
        name: "Arm",
        icon: "🦾",

        description:
            "The arm is the large curved support at the back of the microscope.",

        function:
            "It supports the upper components of the microscope.",

        viewBox: "55 30 100 145"
    },


    light: {
        name: "Light Source",
        icon: "💡",

        description:
            "The light source is located underneath the stage.",

        function:
            "It provides illumination so that the specimen can be seen through the microscope.",

        viewBox: "35 115 90 65"
    },


    base: {
        name: "Base",
        icon: "⬛",

        description:
            "The base is the bottom part of the microscope.",

        function:
            "It supports the entire microscope and provides stability.",

        viewBox: "10 155 145 87"
    }

};


/* =====================================
   OPEN EQUIPMENT
===================================== */

function openEquipment(equipment) {

    const microscopeArea =
        document.getElementById("microscopeArea");

    const equipmentInfo =
        document.getElementById("equipmentInfo");


    equipmentInfo.classList.add("hidden");


    /* MICROSCOPE */

    if (equipment === "microscope") {

        microscopeArea.classList.remove("hidden");

        resetMicroscope();

        microscopeArea.scrollIntoView({
            behavior: "smooth"
        });

        return;
    }


    /* OTHER EQUIPMENT */

    microscopeArea.classList.add("hidden");


    const equipmentData = {

        centrifuge: {
            title: "Centrifuge",

            description:
                "A centrifuge is a laboratory machine that separates substances in a sample by spinning them at high speed.",

            function:
                "It separates components of a mixture based on differences in density."
        },


        balance: {
            title: "Digital Balance",

            description:
                "A digital balance is an electronic instrument used to measure the mass of laboratory materials.",

            function:
                "It measures the mass of objects or substances."
        },


        beaker: {
            title: "Beaker",

            description:
                "A beaker is a common laboratory container used for holding, mixing, and heating substances.",

            function:
                "It is mainly used to contain and mix liquids."
        },


        thermometer: {
            title: "Thermometer",

            description:
                "A thermometer is an instrument used to measure temperature.",

            function:
                "It measures the temperature of a substance or environment."
        },


        burner: {
            title: "Bunsen Burner",

            description:
                "A Bunsen burner is a laboratory device that produces a flame for heating.",

            function:
                "It provides a controlled heat source for appropriate laboratory procedures."
        }

    };


    const data = equipmentData[equipment];

    if (!data) return;


    document
        .getElementById("equipmentTitle")
        .textContent = data.title;


    document
        .getElementById("equipmentDescription")
        .textContent = data.description;


    document
        .getElementById("equipmentFunction")
        .textContent = data.function;


    equipmentInfo.classList.remove("hidden");


    equipmentInfo.scrollIntoView({
        behavior: "smooth"
    });
}


/* =====================================
   SELECT MICROSCOPE PART
===================================== */

function selectPart(partName) {

    const part = microscopeParts[partName];

    if (!part) return;


    /* REMOVE PREVIOUS SELECTION */

    document
        .querySelectorAll(".microscope-part")
        .forEach(partElement => {

            partElement.classList.remove("selected");

        });


    /* HIGHLIGHT SELECTED PART */

    const selectedPart =
        document.querySelector(
            `[data-part="${partName}"]`
        );


    if (selectedPart) {

        selectedPart.classList.add("selected");

    }


    /* UPDATE INFORMATION */

    document.getElementById("infoIcon")
        .textContent = part.icon;


    document.getElementById("partName")
        .textContent = part.name;


    document.getElementById("partDescription")
        .textContent = part.description;


    document.getElementById("partFunction")
        .textContent = part.function;


    /* ZOOM INTO PART */

    const microscopeSVG =
        document.getElementById("microscopeSVG");


    microscopeSVG.setAttribute(
        "viewBox",
        part.viewBox
    );
}


/* =====================================
   RESET MICROSCOPE
===================================== */

function resetMicroscope() {

    const microscopeSVG =
        document.getElementById("microscopeSVG");


    /* RETURN TO FULL VIEW */

    microscopeSVG.setAttribute(
        "viewBox",
        "0 0 159.6 241.87"
    );


    /* REMOVE SELECTION */

    document
        .querySelectorAll(".microscope-part")
        .forEach(part => {

            part.classList.remove("selected");

        });


    /* RESET INFORMATION */

    document.getElementById("infoIcon")
        .textContent = "🔬";


    document.getElementById("partName")
        .textContent = "Select a Part";


    document.getElementById("partDescription")
        .textContent =
            "Click any part of the microscope to zoom in and learn what it does.";


    document.getElementById("partFunction")
        .textContent =
            "Choose a microscope part to see its function.";
}


/* =====================================
   KEYBOARD SUPPORT
===================================== */

function keyboardPart(event, partName) {

    if (
        event.key === "Enter" ||
        event.key === " "
    ) {

        event.preventDefault();

        selectPart(partName);
    }
}


/* =====================================
   CLOSE EQUIPMENT
===================================== */

function closeEquipment() {

    document
        .getElementById("equipmentInfo")
        .classList.add("hidden");


    document
        .getElementById("microscopeArea")
        .classList.add("hidden");
}
