import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InvitationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50 p-4">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-sky-900 mb-6">Baptism Invitation</h1>
          <p className="text-gray-700 mb-8">The full invitation document is available for download below.</p>

          <Button className="bg-sky-700 hover:bg-sky-800">
            <Download className="mr-2 h-4 w-4" />
            Download Invitation
          </Button>

          <p className="mt-8 text-sm text-gray-500">If you have any issues downloading the file, please contact us.</p>
        </div>
      </div>
    </div>
  )
}
