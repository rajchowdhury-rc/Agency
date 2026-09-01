import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../lib/firebase';
import { Calendar, User, Mail, Phone, IndianRupee, LogOut, Loader2, FileSpreadsheet } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  brief: string;
  package: string;
  createdAt: any;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    setLoading(true);
    const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results: Booking[] = [];
      snapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() } as Booking);
      });
      setBookings(results);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching bookings:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/spreadsheets');
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential?.accessToken) {
        setAccessToken(credential.accessToken);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const exportToSheets = async () => {
    setIsExporting(true);
    try {
      let token = accessToken;
      if (!token) {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/spreadsheets');
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        token = credential?.accessToken || null;
        if (!token) throw new Error("Could not get access token");
        setAccessToken(token);
      }

      // Create a new spreadsheet
      const createRes = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          properties: {
            title: `Leads Export - ${new Date().toLocaleDateString()}`
          }
        })
      });
      
      if (!createRes.ok) throw new Error('Failed to create spreadsheet');
      
      const spreadsheet = await createRes.json();
      const spreadsheetId = spreadsheet.spreadsheetId;
      const sheetUrl = spreadsheet.spreadsheetUrl;

      // Prepare data
      const values = [
        ['Date', 'Name', 'Email', 'Phone', 'Package', 'Brief']
      ];
      
      bookings.forEach(b => {
        values.push([
          b.createdAt?.toDate().toLocaleDateString() || '',
          b.name || '',
          b.email || '',
          b.phone || '',
          b.package || '',
          b.brief || ''
        ]);
      });

      // Update the spreadsheet with values
      const updateRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A1:F${values.length}?valueInputOption=USER_ENTERED`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          values
        })
      });

      if (!updateRes.ok) throw new Error('Failed to update spreadsheet');

      window.open(sheetUrl, '_blank');
    } catch (error) {
      console.error(error);
      alert('Failed to export to Google Sheets.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setAccessToken(null);
  };

  if (loading && user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBF9F5]">
        <Loader2 className="w-8 h-8 text-[#9A5328] animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FBF9F5] p-4">
        <div className="bg-white p-8 rounded-2xl shadow-card border border-[#E4DCD0] max-w-md w-full text-center">
          <h1 className="text-2xl font-serif font-bold text-[#141F2D] mb-2">Admin Login</h1>
          <p className="text-[#5E5245] mb-8 text-sm">Sign in to view your lead submissions and booking requests.</p>
          <button
            onClick={handleLogin}
            className="w-full bg-[#141F2D] text-white py-3 rounded-xl hover:bg-[#2A3B52] transition-colors font-medium flex items-center justify-center gap-2"
          >
            <User className="w-4 h-4" />
            Sign in with Google
          </button>
          <div className="mt-6 pt-6 border-t border-[#E4DCD0]">
            <Link to="/" className="text-[#9A5328] hover:underline text-sm font-medium">
              &larr; Back to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F5] p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#141F2D]">Lead Dashboard</h1>
            <p className="text-[#5E5245]">Welcome back, {user.email}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-[#9A5328] hover:underline text-sm font-medium">
              View Website
            </Link>
            <button
              onClick={exportToSheets}
              disabled={isExporting || bookings.length === 0}
              className="px-4 py-2 bg-[#107C41] text-white rounded-lg hover:bg-[#0C6334] transition-colors flex items-center gap-2 text-sm font-medium shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileSpreadsheet className="w-4 h-4" />}
              {isExporting ? 'Exporting...' : 'Export to Sheets'}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white border border-[#E4DCD0] rounded-lg text-[#141F2D] hover:bg-[#F0EBE1] transition-colors flex items-center gap-2 text-sm font-medium shadow-sm"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card border border-[#E4DCD0] overflow-hidden">
          {bookings.length === 0 ? (
            <div className="p-12 text-center">
              <Calendar className="w-12 h-12 text-[#C8BCAB] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#141F2D] mb-1">No leads yet</h3>
              <p className="text-[#5E5245]">When someone submits a booking request, it will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F0EBE1] border-b border-[#E4DCD0]">
                    <th className="p-4 text-xs font-mono text-[#8B481E] uppercase font-semibold">Date</th>
                    <th className="p-4 text-xs font-mono text-[#8B481E] uppercase font-semibold">Client</th>
                    <th className="p-4 text-xs font-mono text-[#8B481E] uppercase font-semibold">Contact</th>
                    <th className="p-4 text-xs font-mono text-[#8B481E] uppercase font-semibold">Package</th>
                    <th className="p-4 text-xs font-mono text-[#8B481E] uppercase font-semibold">Brief</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4DCD0]">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-[#FBF9F5] transition-colors">
                      <td className="p-4 text-sm text-[#5E5245] align-top whitespace-nowrap">
                        {booking.createdAt?.toDate().toLocaleDateString()}
                      </td>
                      <td className="p-4 align-top">
                        <div className="font-medium text-[#141F2D]">{booking.name}</div>
                      </td>
                      <td className="p-4 align-top text-sm">
                        <div className="flex items-center gap-2 text-[#5E5245] mb-1">
                          <Mail className="w-3.5 h-3.5" />
                          <a href={`mailto:${booking.email}`} className="hover:text-[#9A5328]">{booking.email}</a>
                        </div>
                        {booking.phone && (
                          <div className="flex items-center gap-2 text-[#5E5245]">
                            <Phone className="w-3.5 h-3.5" />
                            <a href={`tel:${booking.phone}`} className="hover:text-[#9A5328]">{booking.phone}</a>
                          </div>
                        )}
                      </td>
                      <td className="p-4 align-top">
                        <span className="inline-block px-3 py-1 bg-[#F0EBE1] text-[#8B481E] rounded-full text-xs font-medium font-mono">
                          {booking.package}
                        </span>
                      </td>
                      <td className="p-4 align-top text-sm text-[#141F2D] max-w-md">
                        {booking.brief}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
