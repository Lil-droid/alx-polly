"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function PollForm() {
  const [question, setQuestion] = useState("")
  const [options, setOptions] = useState<string[]>(["", ""])

  return (
    <Card>
      <CardContent className="space-y-4">
        <Input
          placeholder="Poll question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        {options.map((opt, idx) => (
          <Input
            key={idx}
            placeholder={`Option ${idx + 1}`}
            value={opt}
            onChange={(e) => {
              const newOptions = [...options]
              newOptions[idx] = e.target.value
              setOptions(newOptions)
            }}
          />
        ))}

        <Button onClick={() => setOptions([...options, ""])}>Add Option</Button>
        <Button className="w-full">Create Poll</Button>
      </CardContent>
    </Card>
  )
}

