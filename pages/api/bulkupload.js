import Report from "../../model/Report";
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {


    if (req.method == 'POST') {

        const { d, exam, semester } = req.body;

        try {
            
            console.log(d)
            for (let i = 0; i < d.length; i++) {

                const element = d[i];

                if(exam == 'ia1' && element["prn"] != '' && element["marks"] != '') {
                    let report = new Report({prn: element["prn"], ia1: element["marks"], semester:semester})
                    await report.save()
                } else if(exam == 'ia2' && element["prn"] != '' && element["marks"] != '') {
                    let report = new Report({prn: element["prn"], ia2: element["marks"], semester:semester})
                    await report.save()
                } else if(exam == 'sem' && element["prn"] != '' && element["marks"] != '') {
                    let report = new Report({prn: element["prn"], sem: element["marks"], semester:semester})
                    await report.save()
                }
                
            }
            res.status(201).json({ message: "Marks Updated Successfully" })

        } catch (error) {
            res.status(500).json({ message: "error" })
        }

    } else {
        res.status(405).json({ message: "This method is not allowed" })
    }
}

export default connectDb(handler)