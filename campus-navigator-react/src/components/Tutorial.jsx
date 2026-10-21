import { useEffect, useState } from "react";
import "./Tutorial.css";
import { locations } from "../data/locations";

function Tutorial({ active, onClose, setFiltersOpen, setIsInfoOpen, setMenuOpen, setToastContent, setToastActive, setSearchBar,
    setSelectedLocation
}) {
    const [step, setStep] = useState(0);
    const [highlight, setHighlight] = useState(null);

    const steps = [
        {
            selector: ".search-container",
            title: "Search for a location",
            text: "Use the search bar to find buildings, food outlets, hostels, parking areas, and other campus locations.",
            action: () => setSearchBar(true)
        },
        {
            selector: "#filters",
            title: "Filter locations",
            text: "Use the category filters to quickly find Academic, Food, Hostel, Administration, Parking, and Park locations.",
            action: () => setFiltersOpen(true)
        },
        {
            selector: "#edison-block",
            title: "Explore the map",
            text: "Tap a building or location on the map to explore it and view more information.",
            action: () => setSelectedLocation(locations.find(loc => loc.id === 'edison-block'))
        },
        {
            selector: "#info-content",
            title: "View location information",
            text: "The information panel shows details such as facilities, accessibility, timings, and availability.",
            action: () => setIsInfoOpen(true)
        },
        {
            selector: "#navigation-btn",
            title: "Navigate to a location",
            text: "Choose Navigate to find the shortest route to your selected destination.",
            action: () => {
                setIsInfoOpen(true)
            }
        },
        {
            selector: ".map-section",
            title: "Zoom and pan",
            text: "Zoom in or out and drag the map to explore different areas of the campus.",
            action: () => setIsInfoOpen(false)
        },
        {
            selector: "#recent-locations-btn",
            title: "Recent locations",
            text: "Access locations you have recently viewed so you can quickly find them again.",
            action: () => setMenuOpen(true)
        }
    ];

    const closeStepAction = (currentStep) => {
        if (currentStep === 1) {
            setFiltersOpen(false);
        } else if (currentStep === 3) {
            setIsInfoOpen(false);
        } else if (currentStep === 6) {
            setMenuOpen(false);
        }
    };
    useEffect(() => {
        if (!active) return;

        setStep(0);
    }, [active]);

    useEffect(() => {
        if (!active) return;

        const currentStep = steps[step];

        if (!currentStep) return;


        if (currentStep.action) {
            currentStep.action()
        }
        const updateHighlight = () => {
            const element = document.querySelector(currentStep.selector);

            if (element) {
                const rect = element.getBoundingClientRect();

                setHighlight({
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height
                });
            } else {
                setHighlight(null);
            }
        };

        if (currentStep.selector === "#navigation-btn") {
            setTimeout(() => {
                const button = document.querySelector("#navigation-btn");
                const infoContent = document.querySelector("#info-content");

                if (button && infoContent) {
                    const buttonRect = button.getBoundingClientRect();
                    const contentRect = infoContent.getBoundingClientRect();

                    infoContent.scrollTo({
                        top:
                            infoContent.scrollTop +
                            buttonRect.top -
                            contentRect.top -
                            infoContent.clientHeight / 2 +
                            buttonRect.height / 2,
                        behavior: "smooth"
                    });

                    // Update highlight after the smooth scroll
                    setTimeout(updateHighlight, 400);
                } else {
                    updateHighlight();
                }
            }, 300);
        } else {
            updateHighlight();
        }
        const element = document.querySelector(
            currentStep.selector
        );

        if (element) {
            const rect = element.getBoundingClientRect();

            setHighlight({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height
            });
        } else {
            setHighlight(null);
        }
        if (currentStep.action) {
            currentStep.action(false);
        }

    }, [active, step]);

    if (!active) return null;

    const currentStep = steps[step];

    const handleNext = () => {
        closeStepAction(step);
        if (step < steps.length - 1) {
            setStep(step + 1);
        }
    };

    const handleFinish = () => {
        closeStepAction(step);
        setToastContent("tutorial-end");
        setToastActive(true);
        setSelectedLocation(null);
        onClose();
    };

    const handleBack = () => {
        closeStepAction(step);
        if (step > 0) {
            setStep(step - 1);
        }
    };

    return (
        <div id="tutorial-overlay">

            {highlight && (
                <div
                    className="tutorial-highlight"
                    style={{
                        top: highlight.top,
                        left: highlight.left,
                        width: highlight.width,
                        height: highlight.height
                    }}
                />
            )}

            <div className="tutorial-tooltip">

                <div className="tutorial-step-count">
                    Step {step + 1}
                </div>

                <h3>
                    {currentStep.title}
                </h3>

                <p>
                    {currentStep.text}
                </p>

                <div className="tutorial-controls">

                    {step > 0 && (
                        <button
                            className="tutorial-back-btn"
                            onClick={handleBack}
                        >
                            Back
                        </button>
                    )}

                    {step < steps.length - 1 ? (
                        <button
                            className="tutorial-next-btn"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            className="tutorial-finish-btn"
                            onClick={handleFinish}
                        >
                            Finish
                        </button>
                    )}

                </div>

            </div>

        </div>
    );
}

export default Tutorial;