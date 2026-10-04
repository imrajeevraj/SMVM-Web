import {
  Aperture,
  Backpack,
  BarChart3,
  BatteryCharging,
  Boxes,
  Camera,
  ClipboardList,
  FileText,
  LayoutDashboard,
  MemoryStick,
  Package,
  PackageCheck,
  Plug,
  ReceiptText,
  Settings,
  ShoppingCart,
  Store,
  Triangle,
  Truck,
  UserRound,
  Users,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/** Route for this page. Used by breadcrumbs and CTAs so they never drift apart. */
export const CAMSTORE_PATH = '/products/camstore-pos';
export const CAMSTORE_CONTACT_PATH = '/contact?product=camstore-pos';

/**
 * Optional external demo (video / hosted sandbox). No demo URL exists in the repository today,
 * so "Watch Demo" falls back to scrolling to the on-page product tour. Set this to enable it.
 */
export const CAMSTORE_DEMO_URL: string | null = null;

export const CAMSTORE_IMAGES = {
  hero: '/images/products/camstore-pos-card.png',
  storeAmbience: '/images/products/camstore/store-ambience.jpg',
  cameraGear: '/images/products/camstore/camera-gear.jpg',
  scannerPrinter: '/images/products/camstore/scanner-printer.jpg',
} as const;

export const trustIndicators = [
  { value: '1000+', label: 'Stores Trust Us' },
  { value: '50+', label: 'Powerful Features' },
  { value: 'Easy', label: 'Setup' },
  { value: 'Lifetime', label: 'Updates' },
] as const;

export type FeatureItem = { title: string; copy: string; icon: LucideIcon };

export const featureStrip: FeatureItem[] = [
  { title: 'Easy Billing', copy: 'Fast and reliable POS billing', icon: ReceiptText },
  { title: 'Inventory Management', copy: 'Track cameras, lenses & accessories', icon: Boxes },
  { title: 'Customer Management', copy: 'Maintain customer records', icon: Users },
  { title: 'Purchase Management', copy: 'Manage suppliers and purchases', icon: Truck },
  { title: 'Service Management', copy: 'Track camera repairs and services', icon: Wrench },
  { title: 'Detailed Reports', copy: 'Sales, stock & profit insights', icon: BarChart3 },
];

export const keyFeatureList = [
  'Product & Stock Management',
  'Camera, Lens & Accessories Management',
  'POS Billing',
  'Sales & Purchase Management',
  'Barcode Scanning',
  'Customer & Supplier Management',
  'Service & Repair Management',
  'Expense Tracking',
  'GST / Tax Invoice Support',
  'PDF & Thermal Invoice Printing',
  'Detailed Reports & Analytics',
  'Low Stock Monitoring',
] as const;

export const inventoryCategories: Array<{ name: string; icon: LucideIcon }> = [
  { name: 'Cameras', icon: Camera },
  { name: 'Lenses', icon: Aperture },
  { name: 'Accessories', icon: Plug },
  { name: 'Tripods', icon: Triangle },
  { name: 'Bags', icon: Backpack },
  { name: 'Memory Cards', icon: MemoryStick },
  { name: 'Batteries', icon: BatteryCharging },
  { name: 'Other Equipment', icon: Package },
];

export type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock';

export type InventoryRow = {
  product: string;
  sku: string;
  category: string;
  brand: string;
  stock: number;
  purchase: number;
  selling: number;
  gst: number;
  status: StockStatus;
};

export const inventoryRows: InventoryRow[] = [
  { product: 'Canon EOS R50 Kit (18-45mm)', sku: 'CAM-CN-R50K', category: 'Cameras', brand: 'Canon', stock: 12, purchase: 58500, selling: 67990, gst: 18, status: 'In Stock' },
  { product: 'Sony Alpha ZV-E10 Body', sku: 'CAM-SN-ZVE10', category: 'Cameras', brand: 'Sony', stock: 7, purchase: 57200, selling: 64990, gst: 18, status: 'In Stock' },
  { product: 'Nikon Z 50mm f/1.8 S', sku: 'LNS-NK-Z5018', category: 'Lenses', brand: 'Nikon', stock: 3, purchase: 40800, selling: 47500, gst: 18, status: 'Low Stock' },
  { product: 'Sigma 56mm f/1.4 DC DN', sku: 'LNS-SG-5614', category: 'Lenses', brand: 'Sigma', stock: 9, purchase: 28900, selling: 34990, gst: 18, status: 'In Stock' },
  { product: 'Manfrotto Compact Tripod', sku: 'TRP-MF-CMP', category: 'Tripods', brand: 'Manfrotto', stock: 15, purchase: 3150, selling: 4299, gst: 18, status: 'In Stock' },
  { product: 'SanDisk Extreme Pro 128GB', sku: 'MEM-SD-128P', category: 'Memory Cards', brand: 'SanDisk', stock: 2, purchase: 1650, selling: 2199, gst: 18, status: 'Low Stock' },
  { product: 'Lowepro Shoulder Bag 10L', sku: 'BAG-LP-SH10', category: 'Bags', brand: 'Lowepro', stock: 0, purchase: 3400, selling: 4799, gst: 18, status: 'Out of Stock' },
  { product: 'Canon LP-E17 Battery', sku: 'BAT-CN-LPE17', category: 'Batteries', brand: 'Canon', stock: 18, purchase: 2050, selling: 2799, gst: 18, status: 'In Stock' },
];

export const productFormFields: Array<{ label: string; value: string; wide?: boolean }> = [
  { label: 'Product Name', value: 'Canon EOS R50 Kit (18-45mm)', wide: true },
  { label: 'SKU', value: 'CAM-CN-R50K' },
  { label: 'Category', value: 'Cameras' },
  { label: 'Brand', value: 'Canon' },
  { label: 'Model', value: 'EOS R50 + RF-S 18-45mm' },
  { label: 'HSN', value: '8525' },
  { label: 'Purchase Price', value: '₹58,500.00' },
  { label: 'Selling Price', value: '₹67,990.00' },
  { label: 'GST', value: '18%' },
  { label: 'Stock', value: '12 units' },
  { label: 'Supplier', value: 'Metro Photo Distributors' },
  { label: 'Warranty', value: '2 Years' },
  { label: 'Status', value: 'Active' },
];

export type SaleLine = { product: string; hsn: string; qty: number; price: number };

/** One shared sale drives the POS screen and the invoice, so totals can never disagree. */
export const sampleSale = {
  invoiceNo: 'CSP-2026-0148',
  date: '04 Oct 2026',
  customer: { name: 'Rahul Verma', phone: '+91 98XXX 12345', city: 'Bengaluru' },
  payment: 'UPI',
  discount: 500,
  gstRate: 18,
  lines: [
    { product: 'Canon EOS R50 Kit (18-45mm)', hsn: '8525', qty: 1, price: 67990 },
    { product: 'SanDisk Extreme Pro 128GB', hsn: '8523', qty: 2, price: 2199 },
    { product: 'Canon LP-E17 Battery', hsn: '8507', qty: 1, price: 2799 },
  ] as SaleLine[],
  store: {
    name: 'Lens & Light Camera Store',
    address: '12, Camera Market Road, Bengaluru 560001',
    gstin: 'GSTIN 29ABCDE1234F1Z5',
    phone: '+91 80XXX 45678',
  },
};

export function computeSale(sale = sampleSale) {
  const subtotal = sale.lines.reduce((sum, line) => sum + line.qty * line.price, 0);
  const taxable = subtotal - sale.discount;
  const gst = Math.round(taxable * sale.gstRate) / 100;
  const total = Math.round(taxable + gst);
  return { subtotal, taxable, gst, total };
}

export const serviceBadges = ['Pending', 'In Progress', 'Completed'] as const;
export type ServiceStatus = (typeof serviceBadges)[number];

export const serviceRows: Array<{
  id: string;
  customer: string;
  product: string;
  issue: string;
  status: ServiceStatus;
  expected: string;
  staff: string;
}> = [
  { id: 'SRV-1042', customer: 'Rohan Mehta', product: 'Canon EOS 80D', issue: 'Sensor cleaning & shutter check', status: 'In Progress', expected: '08 Oct 2026', staff: 'Anita K.' },
  { id: 'SRV-1041', customer: 'Priya Nair', product: 'Sony FE 24-70mm f/2.8', issue: 'Focus motor noise', status: 'Pending', expected: '11 Oct 2026', staff: 'Imran S.' },
  { id: 'SRV-1039', customer: 'Arjun Rao', product: 'Nikon D7500', issue: 'Mirror assembly repair', status: 'Completed', expected: '02 Oct 2026', staff: 'Anita K.' },
  { id: 'SRV-1038', customer: 'Kavya Shetty', product: 'Tamron 70-300mm', issue: 'Lens mount calibration', status: 'In Progress', expected: '07 Oct 2026', staff: 'Imran S.' },
  { id: 'SRV-1036', customer: 'Faizal Ahmed', product: 'GoPro HERO11', issue: 'Battery door replacement', status: 'Completed', expected: '30 Sep 2026', staff: 'Vikram P.' },
];

export const reportTypes = [
  'Sales Report',
  'Purchase Report',
  'Stock Report',
  'Profit Report',
  'Customer Report',
  'Expense Report',
  'Service Report',
] as const;

export const reportKpis = [
  { label: 'Total Sales', value: '₹12,48,560', delta: '+12.4%', tone: 'blue' },
  { label: 'Total Purchase', value: '₹8,36,320', delta: '+6.1%', tone: 'violet' },
  { label: 'Gross Profit', value: '₹4,12,240', delta: '+9.8%', tone: 'green' },
  { label: 'Low Stock', value: '14 items', delta: 'Needs reorder', tone: 'amber' },
] as const;

export const monthlyTrend = [
  { month: 'May', sales: 62, purchase: 44 },
  { month: 'Jun', sales: 74, purchase: 51 },
  { month: 'Jul', sales: 68, purchase: 56 },
  { month: 'Aug', sales: 86, purchase: 58 },
  { month: 'Sep', sales: 92, purchase: 61 },
  { month: 'Oct', sales: 100, purchase: 66 },
];

export const categorySplit = [
  { name: 'Cameras', pct: 46 },
  { name: 'Lenses', pct: 28 },
  { name: 'Accessories', pct: 14 },
  { name: 'Others', pct: 12 },
];

export const customerRows = [
  { name: 'Rahul Verma', phone: '+91 98XXX 12345', orders: 6, last: '04 Oct 2026', spend: 214780 },
  { name: 'Priya Nair', phone: '+91 97XXX 40218', orders: 3, last: '01 Oct 2026', spend: 98450 },
  { name: 'Arjun Rao', phone: '+91 99XXX 67790', orders: 9, last: '28 Sep 2026', spend: 342300 },
  { name: 'Kavya Shetty', phone: '+91 96XXX 55102', orders: 2, last: '25 Sep 2026', spend: 41990 },
  { name: 'Faizal Ahmed', phone: '+91 98XXX 88014', orders: 4, last: '22 Sep 2026', spend: 126500 },
];

export const supplierRows = [
  { name: 'Metro Photo Distributors', contact: 'Sanjay Kulkarni', city: 'Mumbai', due: 84500, last: '30 Sep 2026' },
  { name: 'Prime Optics Wholesale', contact: 'Deepa Menon', city: 'Chennai', due: 0, last: '24 Sep 2026' },
  { name: 'Shutter Supply Co.', contact: 'Imtiaz Khan', city: 'Hyderabad', due: 32100, last: '19 Sep 2026' },
  { name: 'Gearhouse Imports', contact: 'Nikhil Shah', city: 'Delhi', due: 126900, last: '11 Sep 2026' },
];

export const whyCards: Array<FeatureItem & { number: string }> = [
  { number: '01', title: 'Built for Camera Stores', copy: 'Designed around the real workflows of camera and photography equipment businesses.', icon: Store },
  { number: '02', title: 'Simple & Fast', copy: 'A clean interface that makes everyday billing and inventory management easier.', icon: ShoppingCart },
  { number: '03', title: 'Powerful Inventory Control', copy: 'Track cameras, lenses, accessories, stock levels and product information.', icon: PackageCheck },
  { number: '04', title: 'Ready to Grow', copy: 'Built to support growing stores and expanding product catalogs.', icon: BarChart3 },
];

export const workflowSteps: Array<{ label: string; icon: LucideIcon }> = [
  { label: 'Products', icon: Camera },
  { label: 'Inventory', icon: Boxes },
  { label: 'Purchase', icon: Truck },
  { label: 'Billing', icon: ReceiptText },
  { label: 'Customers', icon: Users },
  { label: 'Service', icon: Wrench },
  { label: 'Reports', icon: BarChart3 },
];

/** Left navigation shown inside every mock CamStore POS screen. Keeps screenshots visually consistent. */
export const appNav: Array<{ id: string; label: string; icon: LucideIcon }> = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'billing', label: 'POS Billing', icon: ReceiptText },
  { id: 'inventory', label: 'Inventory', icon: Boxes },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'suppliers', label: 'Suppliers', icon: Truck },
  { id: 'services', label: 'Services', icon: Wrench },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'invoices', label: 'Invoices', icon: FileText },
  { id: 'purchases', label: 'Purchases', icon: ClipboardList },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const galleryScreens: Array<{ id: string; number: string; title: string; icon: LucideIcon }> = [
  { id: 'dashboard', number: '01', title: 'Dashboard', icon: LayoutDashboard },
  { id: 'billing', number: '02', title: 'POS Billing', icon: ReceiptText },
  { id: 'inventory', number: '03', title: 'Inventory', icon: Boxes },
  { id: 'products', number: '04', title: 'Products', icon: Package },
  { id: 'customers', number: '05', title: 'Customers', icon: UserRound },
  { id: 'suppliers', number: '06', title: 'Suppliers', icon: Truck },
  { id: 'services', number: '07', title: 'Services', icon: Wrench },
  { id: 'reports', number: '08', title: 'Reports', icon: BarChart3 },
  { id: 'invoices', number: '09', title: 'Invoice', icon: FileText },
];

/** Indian digit grouping, e.g. 124990 -> ₹1,24,990. */
export const inr = (value: number, fractionDigits = 0) =>
  `₹${value.toLocaleString('en-IN', { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits })}`;
