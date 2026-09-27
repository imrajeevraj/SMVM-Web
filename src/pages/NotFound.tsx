import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center pt-32 pb-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-text mb-6">This page went off the grid.</h2>
        <div className="flex justify-center gap-4">
          <Button asChild variant="primary">
            <Link to="/">Back Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/products">Explore Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
