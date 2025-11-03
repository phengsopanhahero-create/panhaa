import { Container } from '@/components/layout'
import { Card, CardContent } from '@/components/ui'

export default function TermsPage() {
  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: November 3, 2025</p>

        <Card>
          <CardContent className="pt-6 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using this service, you accept and agree to be bound by
                the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Use License</h2>
              <p className="text-gray-700 mb-3">
                Permission is granted to temporarily download one copy of the materials
                on our website for personal, non-commercial transitory viewing only.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>This is the grant of a license, not a transfer of title</li>
                <li>You may not modify or copy the materials</li>
                <li>You may not use the materials for any commercial purpose</li>
                <li>You may not attempt to decompile or reverse engineer any software</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Disclaimer</h2>
              <p className="text-gray-700">
                The materials on our website are provided on an 'as is' basis. We make
                no warranties, expressed or implied, and hereby disclaims and negates
                all other warranties including, without limitation, implied warranties
                or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Limitations</h2>
              <p className="text-gray-700">
                In no event shall we or our suppliers be liable for any damages
                (including, without limitation, damages for loss of data or profit, or
                due to business interruption) arising out of the use or inability to
                use the materials on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Revisions</h2>
              <p className="text-gray-700">
                We may revise these terms of service for our website at any time without
                notice. By using this website you are agreeing to be bound by the then
                current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Governing Law</h2>
              <p className="text-gray-700">
                These terms and conditions are governed by and construed in accordance
                with the laws and you irrevocably submit to the exclusive jurisdiction
                of the courts in that location.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}