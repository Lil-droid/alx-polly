import PollCard from "./poll-card"

export default function PollList() {
  const polls = [
    { id: "1", question: "What’s your favorite programming language?" },
    { id: "2", question: "Dark mode or Light mode?" },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {polls.map((poll) => (
        <PollCard key={poll.id} poll={poll} />
      ))}
    </div>
  )
}

