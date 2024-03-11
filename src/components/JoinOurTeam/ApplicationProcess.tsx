import {useState} from 'react';

function ApplicationProcess() {
    const steps = ['asdf'];
    const [completedSteps, setCompletedSteps] = useState([]);

    const toggleStep = (stepIndex) => {
      if (completedSteps.includes(stepIndex)) {
        setCompletedSteps(completedSteps.filter(step => step !== stepIndex));
      } else {
        setCompletedSteps([...completedSteps, stepIndex]);
      }
    };

    return(
        <div className='relative md:py-24 py-16'>
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">How To Join</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Ready to get building and take on new challenges? <br /> Apply today!</p>
            </div>

            <div className="flex">
            {steps.map((step, index) => (
                <div
                key={index}
                className={`flex items-center justify-center rounded-full w-12 h-12 mr-4 border-2 cursor-pointer ${
                    completedSteps.includes(index) ? 'bg-green-500 border-green-500' : 'border-gray-300'
                }`}
                onClick={() => toggleStep(index)}
                >
                <span className="text-lg font-bold">{index + 1}</span>
                <span>{step}</span>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ApplicationProcess;