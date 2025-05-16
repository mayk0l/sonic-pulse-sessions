
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const emailSchema = z.string().email({
  message: "Please enter a valid email address",
});

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      emailSchema.parse(email);
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setEmail('');
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
          duration: 5000,
        });
      }, 1000);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-grow relative">
          <Input 
            type="email" 
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className={`bg-techno-dark border ${error ? 'border-red-500' : 'border-gray-700'} rounded px-4 py-2 focus:border-neon-purple outline-none w-full`}
          />
          {error && (
            <p className="absolute text-red-500 text-xs mt-1">{error}</p>
          )}
        </div>
        <Button 
          type="submit" 
          className="bg-neon-purple hover:bg-neon-purple/80 text-black"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
    </form>
  );
}
