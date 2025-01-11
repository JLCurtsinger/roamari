import { useSearchParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Calendar } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  arrivalTime: z.string().min(1, "Please select an arrival time"),
  scheduleConflicts: z.string().optional(),
  counterOfferAmount: z.string().optional(),
  counterOfferNotes: z.string().optional(),
});

export const JobApplication = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const jobTitle = searchParams.get("title") || "Unknown Position";
  const company = searchParams.get("company") || "Unknown Company";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      arrivalTime: "",
      scheduleConflicts: "",
      counterOfferAmount: "",
      counterOfferNotes: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Application Submitted",
      description: "Thank you for applying! We will contact you soon.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Job Details Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900">{jobTitle}</CardTitle>
              <p className="text-lg text-gray-600">{company}</p>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>4 hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span>$25/hour</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>May 1, 2024</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Job Expectations</h3>
                <p className="text-gray-600">
                  This role requires attention to detail, excellent communication skills, and the ability to work independently.
                  You'll be responsible for [specific tasks] and should have experience with [relevant skills].
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Application Form */}
          <Card>
            <CardHeader>
              <CardTitle>Apply for this Position</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="arrivalTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expected Arrival Time</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="scheduleConflicts"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Schedule Conflicts (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="List any schedule conflicts or time constraints..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4 border-t pt-4">
                    <h3 className="text-lg font-semibold">Counter Offer (Optional)</h3>
                    
                    <FormField
                      control={form.control}
                      name="counterOfferAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Proposed Rate</FormLabel>
                          <FormControl>
                            <Input type="text" placeholder="e.g., $30/hour" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="counterOfferNotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Counter Offer Notes</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Explain your counter offer..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-sunset text-white hover:opacity-90">
                    Submit Application
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;