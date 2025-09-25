import { render, screen } from "@testing-library/react";
import Stepper from "../../../components/stepper/stepper";

const demoSteps = [
	{ title: "Fahrzeug" },
	{ title: "Termin" },
	{ title: "Fahrzeug" },
	{ title: "Kontakt" },
];

describe("Stepper", () => {
	it("renders all step circles and labels", () => {
		render(<Stepper steps={demoSteps} currentStep={1} />);
		// circles 1..4 (getByText throws if not present)
		screen.getByText("1");
		screen.getByText("2");
		screen.getByText("3");
		screen.getByText("4");
		// labels (some titles may repeat)
		demoSteps.forEach((s) => {
			expect(screen.getAllByText(s.title).length).toBeGreaterThanOrEqual(1);
		});
	});

	it("applies active and upcoming styles correctly (currentStep=1)", () => {
		render(<Stepper steps={demoSteps} currentStep={1} />);
		const active = screen.getByText("1");
		const upcoming = screen.getByText("2");
		// active step should have blue background and blue border
		expect(active.className).toContain("bg-blue-600");
		expect(active.className).toContain("border-blue-600");
		// upcoming step should be gray
		expect(upcoming.className).toContain("bg-gray-200");
	});

	it("marks previous steps as completed and current as active", () => {
		render(<Stepper steps={demoSteps} currentStep={3} />);
		const completedOne = screen.getByText("1");
		const completedTwo = screen.getByText("2");
		const active = screen.getByText("3");
		const upcoming = screen.getByText("4");

		// completed steps have blue background
		expect(completedOne.className).toContain("bg-blue-600");
		expect(completedTwo.className).toContain("bg-blue-600");
		// current step has blue border as well
		expect(active.className).toContain("bg-blue-600");
		expect(active.className).toContain("border-blue-600");
		// next step is gray
		expect(upcoming.className).toContain("bg-gray-200");
	});

	it("splits steps into multiple rows when exceeding maxStepsPerRow", () => {
		const sixSteps = [
			{ title: "One" },
			{ title: "Two" },
			{ title: "Three" },
			{ title: "Four" },
			{ title: "Five" },
			{ title: "Six" },
		];
		render(<Stepper steps={sixSteps} currentStep={1} maxStepsPerRow={4} />);
		// There should be two ordered lists (two rows)
		const lists = document.querySelectorAll("ol");
		expect(lists.length).toBe(2);
		// All step numbers should be present
		["1", "2", "3", "4", "5", "6"].forEach((n) => screen.getByText(n));
	});
});
