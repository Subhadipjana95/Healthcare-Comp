import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export function Home() {
  const stats = [
    { value: "2K+", label: "Active Users" },
    { value: "24/7", label: "Support" },
    { value: "98%", label: "Satisfaction" },
    { value: "100+", label: "Partners" }
  ];

  const features = [
    {
      title: "Emergency Services",
      description: "Quick access to nearby hospitals and emergency contacts",
      icon: "🚨",
      link: "/emergency"
    },
    {
      title: "Health Documents",
      description: "Securely store and manage your medical records",
      icon: "📄",
      link: "/documents"
    },
    {
      title: "Medication Reminders",
      description: "Never miss your medications with smart reminders",
      icon: "💊",
      link: "/medications"
    },
    {
      title: "User Profile",
      description: "Manage your personal and medical information",
      icon: "👤",
      link: "/profile"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/90 to-blue-600/90 py-32">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Transform Your Healthcare <span className="text-blue-200">Management</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Your intelligent companion for seamless healthcare coordination and management
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link to="/signup" className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Get Started
            </Link>
            <Link to="/emergency" className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
              Emergency Services
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your health in one place
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <Link key={feature.title} to={feature.link}>
            <Card className="group h-full hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}