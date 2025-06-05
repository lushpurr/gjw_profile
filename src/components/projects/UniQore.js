import InvoicingImage1 from '../../images/invoice_1.png'
import InvoicingImage2 from '../../images/invoice_2.png'
import OnboardingImage1 from '../../images/onboarding_1.png'
import OnboardingImage2 from '../../images/onboarding_2.png'

const UniQore = () => {
    return (
        <>
					<h3>Uniqore - Complete Logistics Solution</h3>
					<p>
						Typescript - Angular - GraphQl - DynamoDb   <br/>
						Jun 2021 - May 2025
					</p>
					<p>
						Major projects include:
					</p>
					<p>
						* Bulk Invoice Generation. <br/>
						* Onboarding Update.
					</p>

					<p>
						<b>Bulk Invoice Generation</b><br/>
						Since it's launch in 2024 this tool has processed 100,000+ invoices totalling over £50M.<br/>
						Users choose which invoice template required and selection of users and can download populated CSV timesheet.<br/>
						Once filled in CSV can be uploaded back to system where it is then chacked and validate before being sent for processing.<br/>

					</p>

						<img className="project-image break" alt="Invoice generation screenshot" src={InvoicingImage1}/>
						<img className="project-image " alt="Invoice generation screenshot" src={InvoicingImage2}/>


					<p>
						<b>Onboarding Update</b><br/>
						Allows users to self-service their onboarding process. Since it's launch in 2023 over 5000 drivers have been onboarding using this method.<br/>
						Users have a list of "Onboarding flows" attached to them.<br/>
						An "Onboarding flow" contains a list of "onboarding steps" whose typename is used to determine the rendering type.<br/>
						Steps are ticked off as completed and once all steps are complete the onboarding flow can be completed.
					</p>

					<img className="project-image break" alt="Onboarding screenshot" src={OnboardingImage1}/>
					<img className="project-image" alt="Onboarding screenshot" src={OnboardingImage2}/>

        </>
    )
}

export default UniQore;