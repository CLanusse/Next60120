import LogoutButton from "@/components/admin/LogoutButton"
import ProductsTable from "@/components/admin/ProductsTable"




const AdminPage = () => {

    return (
        <div className="container m-auto pt-8">
            <h2>Admin</h2>
            <LogoutButton />
            <ProductsTable />
        </div>
    )
}

export default AdminPage