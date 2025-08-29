import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PollCard({ poll }: { poll: { id: string; question: string } }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{poll.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <Link href={`/polls/${poll.id}`}>
          <Button>View Poll</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

