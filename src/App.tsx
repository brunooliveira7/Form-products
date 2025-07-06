import "./App.css";
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export function App() {
  return (
    // Main container
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-bold">Products</h1>

      {/* Filter */}
      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input className="w-auto" name="id" placeholder="Search by ID" />
          <Input
            className="w-auto"
            name="product"
            placeholder="Search by Product"
          />
          <Input
            className="w-auto"
            name="price"
            placeholder="Search by Price"
          />
          <Button
            className="cursor-pointer"
            type="submit"
            variant={"secondary"}
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </form>
        {/* Modal */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="cursor-pointer">
              <PlusCircle className="w-4 h-4 mr-2" />
              Add new Product
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new Product</DialogTitle>
              <DialogDescription>
                Create a new product in the system.
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-6">
              <div className="grid grid-cols-4 items-center text-right gap-3 ">
                <Label htmlFor="name">Product</Label>
                <Input className="col-span-3" id="name" />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="price">Price</Label>
                <Input className="col-span-3" id="price" />
              </div>

              <DialogFooter>
                <Button className="cursor-pointer" type="submit">
                  Save changes
                </Button>
                <DialogClose asChild>
                  <Button
                    className="cursor-pointer"
                    type="button"
                    variant="outline"
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {/* Table */}
      <div className="border rounded-md shadow-sm p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{i}</TableCell>
                  <TableCell>Product {i}</TableCell>
                  <TableCell>$ {i * 10}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
