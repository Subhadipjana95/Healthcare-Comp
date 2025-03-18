import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface WaterIntakeProps {
  dailyGoal?: number; // in milliliters
}

export function WaterIntake({ dailyGoal = 2000 }: WaterIntakeProps) {
  const [intake, setIntake] = React.useState(0);
  const [goal, setGoal] = React.useState(dailyGoal);
  const [isEditingGoal, setIsEditingGoal] = React.useState(false);
  const [newGoal, setNewGoal] = React.useState(dailyGoal.toString());

  const progress = Math.min((intake / goal) * 100, 100);

  const handleAddWater = (amount: number) => {
    setIntake((prev) => Math.min(prev + amount, goal));
  };

  const handleUpdateGoal = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedGoal = parseInt(newGoal);
    if (!isNaN(updatedGoal) && updatedGoal > 0) {
      setGoal(updatedGoal);
      setIsEditingGoal(false);
    }
  };

  const handleReset = () => {
    setIntake(0);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Water Intake Tracker</CardTitle>
          <Button
            variant="outline"
            onClick={() => setIsEditingGoal(!isEditingGoal)}
          >
            {isEditingGoal ? "Cancel" : "Set Goal"}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {isEditingGoal ? (
            <form onSubmit={handleUpdateGoal} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Daily Goal (milliliters)
                </label>
                <input
                  type="number"
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  className="w-full rounded-md border p-2"
                  min="1"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Update Goal
              </Button>
            </form>
          ) : (
            <>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress: {intake}ml / {goal}ml</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    onClick={() => handleAddWater(250)}
                    className="w-full"
                  >
                    +250ml
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleAddWater(500)}
                    className="w-full"
                  >
                    +500ml
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleAddWater(1000)}
                    className="w-full"
                  >
                    +1000ml
                  </Button>
                </div>

                <Button
                  variant="destructive"
                  onClick={handleReset}
                  className="w-full"
                >
                  Reset Daily Progress
                </Button>
              </div>

              {progress >= 100 && (
                <div className="bg-green-100 text-green-800 p-4 rounded-md text-center">
                  Congratulations! You've reached your daily water intake goal! 🎉
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}