# Cite Rite

## Background

GPTZero is developing Cite Rite, a tool that helps people see how much evidence there is for the claims found in a text, using AI, in order to help the increase the quality and transparency of the world's knowledge. In our app, users submit a piece of text, and Cite Rite will extract the testable claims in a text, find citations related to the given text, and extract the logical dependencies of the claims in the text.

### User Stories

- As a student who uses AI to help write essays, I'd like to quickly understand which arguments of my writing are evidence-based (e.g., have high-authority citations), and which are not.
- As a subscriber to independent journalist sources, I'd like to better understand the validitiy of claims made in certain articles.

## The Challenge

The frontend is in a poor state. The user interface is unattractive, and the scan result is outputted simply as a raw JSON string, which is inappropriate for a consumer-facing app. The frontend must be updated to clearly display the parts of the text that are claims and illustrate their relationship with the associated citations returned by the backend.

### Objectives:

1. Display Scan Results Intuitively:
   - Replace the raw JSON output with a structured, interactive display of the Cite Rite scan results.
   - Users should intuitively understand which parts of the inputted document are logical claims, and which citations are related to each claim.
2. Enhance Interactivity:
   - Allow users to interact with a claim to view more detailed information about its citations.
   - Users should have the ability to get guidance on how to use the app and interpret the results.
3. Improve UI/UX Design:
   - Redesign the interface to be clean and aesthetically pleasing.
4. Utilize best practices
   - Submitted code should be readable, error-free, and utlize modern React best practices.

Bonus:

- Show the relationship between claims, and their parents/children. We store extracted claims as a tree, where the current node logically supports its parent nodes, and the children nodes logically support its current nodes. For example, the claim "GPTZero moved to a larger Union Square office in 2023" is a child of the claim "GPTZero is growing its team in New York City and beyond".

## Technical Details

The frontend is not connected to an API. Instead, a mock API response has been given in `src/data/exampleResponse.json`. Logic in `api/sourceScan` simulates an API call which always returns the contents of `exampleResponse.json`. The given example response is what might be returned if the sample text was sent to a functional backend integrated with the Cite Rite machine learning model.

More details on the Cite Rite API request, response and general model schema is in `apidocs.html` and can be viewed in a browser at `http://localhost:3001/apidocs.html` when the frontend is running. Alternatively, the `html` file is a static file and can be opened with any browser.

The frontend is a next app. To run the development server:

1. Install dependencies

```bash
npm i
```

2. Run the server

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Constraints

- We recommend spending two hours or less on the assessment (does not have to be continguous), although if you decide to take more time, please make a commit indicating your progress by the two hour mark. We will consider all of the work done.
- You may install any npm dependencies necessary to meet all objectives.
- You may use ChatGPT, Copilot, or any AI assistant to help you meet all objectives.
- Please do not share or publish any aspects of this assignment.

## Evaluation Criteria

The submission will be evaluated based on how well the solution satisfied the [objectives](#objectives). Objectives are displayed in order of prioritization. That is, the first objective is the most important to satisfy, then the second, and so on.

## Submission

- Optionally create a file called `NOTES.md` in the project root add some of the changes you'd make given 2 more weeks of time, as well as anything else you'd like us to know about your submission. For example, if any instructions were unclear or you encountered problems in the provided code please let us know.
- Push all your changes to a new _private_ GitHub repository after completing the assessment and invite `jacob@gptzero.me`, `alex@gptzero.me`, and `edmond@gptzero.me` as contributors.

We understand your time is valuable and we wish to thank you for taking the time to interview at GPTZero!

### Disclaimer

This assessment is provided for the sole purpose of evaluating your skills in relation to the potential employment at GPTZero. The contents, challenges, and any provided code or documentation are confidential and proprietary to GPTZero. You are not permitted to share, redistribute, or use this material for any purpose other than for completing the assessment as directed. Any violation of these terms may lead to disqualification from the application process.
