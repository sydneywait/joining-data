const employeeBuilder = (employeeObject)=>{


return `<article class="employee">
    <header class="employee__name">
        <h1>${employeeObject.name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${employeeObject.department.name} department
    </section>
    <section class="employee__computer">
        Currently using a ${employeeObject.computer.computerName}
    </section>
</article>`

}

export default employeeBuilder;
