import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 py-12 md:py-24">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Have a question or want to work together? Fill out the form below and
          we'll get back to you as soon as possible.
        </p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input
              id="first-name"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" placeholder="Enter your last name" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            required
            type="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Enter a subject" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select id="country" required>
            <SelectTrigger>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="mx">Mexico</SelectItem>
              <SelectItem value="gb">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="jp">Japan</SelectItem>
              <SelectItem value="cn">China</SelectItem>
              <SelectItem value="br">Brazil</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            className="min-h-[120px]"
            id="message"
            placeholder="Enter your message"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="privacy-policy" required />
          <Label htmlFor="privacy-policy">
            I agree to the
            <Link className="underline" href="#">
              Privacy Policy
            </Link>
          </Label>
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Page;
