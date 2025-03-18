import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TherapistType {
  id: number;
  name: string;
  specialization: string;
  availability: string[];
  type: "online" | "offline";
  location?: string;
}

interface Quote {
  id: number;
  text: string;
  author: string;
}

export function MentalHealth() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = React.useState(0);
  const [selectedTherapist, setSelectedTherapist] = React.useState<TherapistType | null>(null);
  const [selectedSession, setSelectedSession] = React.useState<string>("");
  const [selectedType, setSelectedType] = React.useState<"online" | "offline">("online");

  const therapists: TherapistType[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cognitive Behavioral Therapy",
      availability: ["Monday 2:00 PM", "Wednesday 3:00 PM", "Friday 10:00 AM"],
      type: "online"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Anxiety and Depression",
      availability: ["Tuesday 11:00 AM", "Thursday 4:00 PM", "Saturday 9:00 AM"],
      type: "offline",
      location: "123 Healthcare Ave"
    },
    {
      id: 3,
      name: "Dr. Emily Wilson",
      specialization: "Stress Management",
      availability: ["Monday 10:00 AM", "Wednesday 1:00 PM", "Friday 3:00 PM"],
      type: "online"
    }
  ];

  const handleBooking = () => {
    if (selectedTherapist && selectedSession) {
      alert(`Booking confirmed with ${selectedTherapist.name} for ${selectedSession}`);
      setSelectedTherapist(null);
      setSelectedSession("");
    }
  };

  const [quotes, setQuotes] = React.useState<Quote[]>([
    { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { id: 2, text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { id: 3, text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { id: 4, text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { id: 5, text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  ]);

  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleNextQuote();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      handlePrevQuote();
    }
  };

  const handlePrevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  // Simulating daily quote updates
  React.useEffect(() => {
    const today = new Date().toDateString();
    const lastUpdate = localStorage.getItem('lastQuoteUpdate');

    if (lastUpdate !== today) {
      // In a real application, this would fetch new quotes from an API
      const newQuotes: Quote[] = [
        { id: 6, text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.", author: "Unknown" },
        { id: 7, text: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared and anxious.", author: "Lori Deschene" },
        { id: 8, text: "Recovery is not one and done. It is a lifelong journey that takes place one day, one step at a time.", author: "Unknown" },
        { id: 9, text: "You are not alone. You are seen. You are heard. You are important.", author: "Unknown" },
        { id: 10, text: "Self-care is not selfish. You cannot serve from an empty vessel.", author: "Eleanor Brown" },
      ];
      setQuotes(newQuotes);
      localStorage.setItem('lastQuoteUpdate', today);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card className="card-hover animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🧠</span> Mental Health Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Quotes Carousel */}
            <div
              className="relative overflow-hidden p-6 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="text-center space-y-4">
                <p className="text-xl italic">
                  "{quotes[currentQuoteIndex].text}"
                </p>
                <p className="text-gray-600">- {quotes[currentQuoteIndex].author}</p>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevQuote}
                  className="hover-scale transition-all"
                >
                  Previous Quote
                </Button>
                <Button
                  variant="outline"
                  onClick={handleNextQuote}
                  className="hover-scale transition-all"
                >
                  Next Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Therapy Booking Section */}
          <Card className="mt-8 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📅</span> Book a Therapy Session
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <Button
                  variant={selectedType === "online" ? "default" : "outline"}
                  onClick={() => {
                    setSelectedType("online");
                    setSelectedTherapist(null);
                    setSelectedSession("");
                  }}
                  className="flex-1 hover-scale transition-all"
                >
                  Online Session
                </Button>
                <Button
                  variant={selectedType === "offline" ? "default" : "outline"}
                  onClick={() => {
                    setSelectedType("offline");
                    setSelectedTherapist(null);
                    setSelectedSession("");
                  }}
                  className="flex-1 hover-scale transition-all"
                >
                  Offline Session
                </Button>
              </div>

              <div className="grid gap-4">
                {therapists
                  .filter((t) => t.type === selectedType)
                  .map((therapist) => (
                    <div
                      key={therapist.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedTherapist?.id === therapist.id ? 'border-primary bg-primary/5' : 'hover:border-primary/50'}`}
                      onClick={() => setSelectedTherapist(therapist)}
                    >
                      <h3 className="font-medium text-lg">{therapist.name}</h3>
                      <p className="text-muted-foreground">{therapist.specialization}</p>
                      {therapist.type === "offline" && (
                        <p className="text-sm text-muted-foreground mt-1">Location: {therapist.location}</p>
                      )}
                    </div>
                  ))}
              </div>

              {selectedTherapist && (
                <div className="space-y-4">
                  <h3 className="font-medium">Available Time Slots</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedTherapist.availability.map((slot) => (
                      <Button
                        key={slot}
                        variant={selectedSession === slot ? "default" : "outline"}
                        onClick={() => setSelectedSession(slot)}
                        className="hover-scale transition-all"
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {selectedTherapist && selectedSession && (
                <Button
                  onClick={handleBooking}
                  className="w-full hover-scale transition-all"
                >
                  Confirm Booking
                </Button>
              )}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}